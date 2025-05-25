pipeline {
    agent {
        docker {
            image 'cypress/browsers:node-18.18.0-chrome-120' // Use version that fits your Cypress/browser needs
            args '-u root' // Run as root to avoid permission issues
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Boki995/cypress-tests.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
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
            // Optional: if you enable JUnit reporter in Cypress
            junit 'cypress/results/*.xml'
        }
    }
}
