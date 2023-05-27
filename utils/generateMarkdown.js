// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
} else if (license === 'Apache Liscense 2.0') {
  return '[![License: Apache 2](https://img.shields.io/badge/License-Apache_2-blue.svg)]'
} else if (license === 'Boost Software Liscense 1.0') {
  return '[![License: BSL 1.0](https://img.shields.io/badge/License-BSL_1.0-brightgreen.svg)]'
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
  return 'https://choosealicense.com/licenses/mit/'
} else if (license === 'Apache Liscense 2.0') {
  return 'https://choosealicense.com/licenses/apache-2.0/'
} else if (license === 'Boost Software Liscense 1.0') {
  return 'https://choosealicense.com/licenses/bsl-1.0/'
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This repository is cover under the ${license} you can read about it at: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  return `# ${data.title} ${renderLicenseBadge(license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  ${renderLicenseSection(license)}
  ## Questions
  You can contact me From;

  My GitHub Username: ${data.username}

  My GitHub Profile: ${data.github}

  My Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
