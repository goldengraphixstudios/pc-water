const fs = require('fs')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..')

function moveIfExists(sourceRelativePath, targetRelativePath) {
  const sourcePath = path.join(projectRoot, sourceRelativePath)
  const targetPath = path.join(projectRoot, targetRelativePath)

  if (!fs.existsSync(sourcePath)) {
    return
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.rmSync(targetPath, { recursive: true, force: true })
  fs.cpSync(sourcePath, targetPath, { recursive: true, force: true })
  fs.rmSync(sourcePath, { recursive: true, force: true })
}

function replaceInFile(relativePath, searchValue, replaceValue) {
  const filePath = path.join(projectRoot, relativePath)
  if (!fs.existsSync(filePath)) {
    return
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const next = source.replace(searchValue, replaceValue)
  fs.writeFileSync(filePath, next)
}

moveIfExists('proxy.ts', path.join('.gh-pages-disabled', 'proxy.ts'))
moveIfExists(path.join('app', 'cms', '(protected)'), path.join('.gh-pages-disabled', 'app-cms-protected'))
moveIfExists(path.join('app', 'api', 'cms'), path.join('.gh-pages-disabled', 'app-api-cms'))

;[
  path.join('app', 'sitemap.ts'),
  path.join('app', 'projects', 'page.tsx'),
  path.join('app', 'projects', '[slug]', 'page.tsx'),
  path.join('app', 'resources', 'page.tsx'),
  path.join('app', 'resources', '[slug]', 'page.tsx'),
].forEach((relativePath) => {
  replaceInFile(relativePath, "export const dynamic = 'force-dynamic'", "export const dynamic = 'force-static'")
})
