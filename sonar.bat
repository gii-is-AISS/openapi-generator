setx "SONAR_TOKEN" "2d0e815c68f8ecf02ae4b399277fbdea80ee4419"
mvn -fn verify org.sonarsource.scanner.maven:sonar-maven-plugin:sonar -Dmaven.test.failure.ignore=true -Djacoco.haltonfailure=false