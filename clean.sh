#!/usr/bin/env sh

# quick delete all node_modules, compatible with different platforms
uNames=`uname -s`
osName=${uNames: 0: 4}
linuxDelete=`find . -name "node_modules" -type d -prune -exec rimraf '{}' +`
if [ "$osName" == "Darw" ] # Darwin
then
  $linuxDelete
	echo "Completed!"
elif [ "$osName" == "Linu" ] # Linux
then
  $linuxDelete
	echo "Completed!"
elif [ "$osName" == "MING" ] # MINGW, windows, git-bash
then 
  FOR /d /r . %d in [node_modules] DO @IF EXIST "%d" rimraf /s /q "%d"
	echo "Completed!"
fi