// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![screenshot](${data.screenshotPath})

  ## License

  ${data.license}

  ## Features

  ${data.features}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have additional questions, please contact me at: ${data.email}

  Github: [${data.github}](#https://github.com/${data.github})

  
  `;
}

module.exports = generateMarkdown;
