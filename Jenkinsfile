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
        stage('Verify Build Output') {
            steps {
                // Fail fast if 'out/' wasn't generated (e.g. output: 'export' missing in next.config.js)
                sh 'test -d out && echo "out/ folder found" || (echo "ERROR: out/ folder missing. Check next.config.js has output: export" && exit 1)'
            }
        }
        stage('Deploy to OVIPanel') {
            steps {
                ftpPublisher(
                    alwaysPublishFromMaster: false,
                    masterNodeName: '',
                    paramPublish: [parameterName: ''],
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
                                    remoteDirectory: '/home/globalinfotechin/web_globalinfotechindia_com/public_html/gii-web-main',
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
