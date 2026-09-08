pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node Check') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to OVIPanel') {
            steps {
                ftpPublisher(
                    alwaysPublishFromMaster: true,
                    continueOnError: false,
                    failOnError: true,
                    masterNodeName: '',
                    paramPublish: null,
                    publishers: [[
                        configName: 'OVIPanel',
                        transfers: [[
                            asciiMode: false,
                            cleanRemote: false,
                            excludes: '',
                            flatten: false,
                            makeEmptyDirs: true,
                            noDefaultExcludes: false,
                            patternSeparator: '[, ]+',
                            remoteDirectory: '',
                            remoteDirectorySDF: false,
                            removePrefix: 'out',
                            sourceFiles: 'out/**/*'
                        ]],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: true
                    ]]
                )
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully!'
        }

        failure {
            echo 'Build or deployment failed. Check the console output.'
        }
    }
}
