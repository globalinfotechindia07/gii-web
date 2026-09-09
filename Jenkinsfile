pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm

                sh '''
                    echo "===== CHECKED OUT COMMIT ====="
                    git log -1 --oneline
                    git status
                '''
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
                sh '''
                    echo "===== VERIFYING BUILD ====="

                    if [ ! -d "out" ]; then
                        echo "ERROR: out/ folder missing!"
                        echo "Check next.config.js has:"
                        echo "output: 'export'"
                        exit 1
                    fi

                    echo "out/ folder found successfully"

                    echo "===== BUILD FILES ====="
                    ls -lah out/
                    echo "===== INDEX CHECK ====="
                    ls -lah out/index.html
                '''
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

                                    remoteDirectory: 'gii-web-main',
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
            echo '======================================'
            echo 'BUILD + DEPLOYMENT SUCCESSFUL'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'BUILD OR DEPLOYMENT FAILED'
            echo 'CHECK JENKINS CONSOLE OUTPUT'
            echo '======================================'
        }
    }
}
