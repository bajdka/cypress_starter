import addContext from 'mochawesome/addContext'
import './customAssertions'
import './elementCommands'

const getScreenshotFileName = (test, runnable) => {
  let parent = runnable.parent
  let filename = ''
  while (parent && parent.title) {
    filename = `${parent.title} -- ${filename}`
    parent = parent.parent
  }
  filename += `${test.title} (failed).png`
  return filename
}

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = getScreenshotFileName(test, runnable)
    addContext({ test }, `screenshots/${Cypress.spec.name}/${screenshotFileName}`)
    addContext({ test }, `videos/${Cypress.spec.name}.mp4`)
  }
})

chai.config.truncateThreshold = 0
