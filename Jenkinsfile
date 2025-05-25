pipeline {
    agent any

    tools {
        nodejs 'Node 18' // Make sure "Node 18" is configured in Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Boki995/cypress-tests.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // or 'npm install' if package-lock.json is missing
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Only works if using mocha-junit-reporter configured in cypress.config.js
            junit 'cypress/results/*.xml'
        }
    }
}
