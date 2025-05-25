pipeline {
    agent any

    tools {
        maven 'Maven 3.9.0' // Define in "Global Tool Configuration"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Boki995/cypress-tests.git', branch: 'master'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
    }

    post {
        always {
            junit '**/target/surefire-reports/*.xml'
        }
    }
}
