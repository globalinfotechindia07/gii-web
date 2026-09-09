pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Git Commit') {
            steps {
                sh 'echo "===== CURRENT COMMIT ====="'
                sh 'git log -1 --oneline'
                sh 'git status'
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

        stage('Verify Build Output') {
            steps {
                sh 'echo "===== BUILD OUTPUT ====="'
                sh 'ls -lah'
                sh 'ls -lah out'
                sh 'test -d out'
            }
        }

        stage('Deploy to OVIPanel') {
            steps {
                ftpPublisher(
                    alwaysPublishFromMaster: false,
                    masterNodeName: '',
                    paramPublish: [
                        parameterName: ''
                    ],
                    continueOnError: false,
                    failOnError: true,
                    publishers: [
                        [
                            configName: 'OVIPanel',
                            transfers: [
                                [
                                    asciiMode: false,
                                    cleanRemote: true,
                                    excludes: '',
                                    flatten: false,
                                    makeEmptyDirs: true,
                                    noDefaultExcludes: false,
                                    patternSeparator: '[, ]+',
                                    remoteDirectory: '/..',
                                    remoteDirectorySDF: false,
                                    removePrefix: 'out',
                                    sourceFiles: 'out/**/*'
                                ]
                            ],
                            usePromotionTimestamp: false,
                            useWorkspaceInPromotion: false,
                            verbose: true
                        ]
                    ]
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
