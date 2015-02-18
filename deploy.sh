#!/bin/sh

# with help from
# http://www.cyberciti.biz/tips/linux-upload-the-files-and-directory-tree-to-remote-ftp-server.html

HOST='ftp.dottirberlin.com'
USER=''
PASSWD=''
FILE='dottir_build'

rm -r $FILE
mkdir $FILE
cp index.html $FILE
cp -r css $FILE
cp -r js $FILE
cp -r images $FILE
cp -r webfonts $FILE

ncftpput -R -v -u $USER -p $PASSWD $HOST / $FILE
