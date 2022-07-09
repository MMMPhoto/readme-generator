// Global variable
let featuresList = '';

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenses(license) {
  if (license.name === 'Creative Commons Zero') {
    license.link = 'http://creativecommons.org/publicdomain/zero/1.0/';
    license.badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](${license.link})`;
  } else if (license.name === 'MIT') {
    license.link = 'https://opensource.org/licenses/MIT';
    license.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${license.link})`;
  } else if (license.name === 'Apache 2.0') {
    license.link = 'https://opensource.org/licenses/Apache-2.0';
    license.badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${license.link})`;
  };
};

// Generate Features List for Markdown
function generateFeaturesList(data) {
  const featuresArray = data.features.split(', ');
  console.log(featuresArray);
  for (i = 0; i < featuresArray.length; i++) {
    featuresList += `- ${featuresArray[i]}\n  `;
  };
};
// Function to generate markdown for README
function generateMarkdown(data) {
  
  // Set variables
  const date = new Date();
  const year = date.getFullYear();
  let license = {
    name: `${data.license}`,
    badge: '',
    link: '',
  };
  
  // Call License Function
  renderLicenses(license);
  console.log(license);
  // Call Features List Function
  generateFeaturesList(data);

  // Generate Markdown Text
  return `
  # ${data.title}

  ${license.badge}

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

  ## License

  ### ${license.name}


  ${license.badge}

  This app is licensed under the ${license.name} License. Please click [HERE](${license.link}) for more info.

  ## Features

  ${featuresList}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have additional questions, please contact me at: ${data.email}

  Github: [${data.github}](https://github.com/${data.github})

  --------------------------------------

  ### &copy; ${year} ${data.name}


  `;
};

// Export Markdown Function
module.exports = generateMarkdown;
