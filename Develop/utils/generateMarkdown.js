// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  if(license != 'Other') {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case 'Apache 2.0':
      licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost':
      licenseLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'BSD 2-Clause':
      licenseLink = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clase':
      licenseLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GNU GPL v3.0':
      licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT': 
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'The Unlicense':
      licenseLink = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      licenseLink = '';
      break;
  }

  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license !== 'Other') {
    licenseSection = '### License\n'
    licenseSection = '### License\n This project is licensed with ' + renderLicenseLink(license) + '. Click the link for more information.'
  } 
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n

  ${renderLicenseBadge(data.license)}
  
  ## Description\n
  ${data.description}
  
  ## Table of Contents\n
  
  * [Installation](###-Installation)
  * [Usage](###-Usage)
  * [Contributors](###-Contributors)
  * [Test Instructions](###-Test-Instructions)
  * [License](###-License)
  * [Questions](###-Questions)
    
  ### Installation\n
  ${data.installation}
  
  ### Usage\n
  ${data.usage}
  
  ### Contributors\n
  ${data.contributors}
  
  ### Test Instructions\n
  ${data.test}
  
  ${renderLicenseSection(data.license)}\n

  ### Questions\n
  Check out my Github Repo here at: [${data.github}](https://github.com/${data.github})\n
  Email me at: ${data.email}`;
}

module.exports = generateMarkdown;
