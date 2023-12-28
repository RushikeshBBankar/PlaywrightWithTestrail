pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code repository
                git 'https://github.com/RushikeshBBankar/PlaywrightWithTestrail.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install necessary dependencies (Node.js, Playwright, etc.)
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Execute Playwright tests
                sh 'npm test'
            }
        }
    }
}
