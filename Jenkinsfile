pipeline {
    agent any
    tools {
        maven 'Maven'
        jdk 'JDK 1.8'
    }
    stages {
        stage ('Initialize') {
            steps {
                sh '''

                    curl "https://api.github.com/repos/MEET-U-UN/Front/statuses/$GIT_COMMIT?access_token=5d191051384154ea4a76625b3336bc5c57851923" \
                      -H "Content-Type: application/json" \
                      -X POST \
                      -d "{\"state\": \"pending\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"$BUILD_URL\"}"
                '''
                sh '''
                    echo "PATH = ${PATH}"
                '''
            }
        }
        stage ('Build') {
            steps {
                sh 'mvn clean install package spring-boot:repackage'
            }
        }
    }
    post{
        always{
            sh '''
            TOKEN1=5907dc5ded25e9cc675b64294d90aadc7553615c
            TOKEN2=66b4d4da233b7a5a599708f84cb096929344d715
                  curl "https://api.github.com/repos/MEET-U-UN/Front/statuses/$GIT_COMMIT?access_token=5d191051384154ea4a76625b3336bc5c57851923" \
                  -H "Content-Type: application/json" \
                  -X POST \
                  -d "{\"state\": \"$BUILD_STATUS\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"$BUILD_URL\"}"
            '''
        }
    }
}
