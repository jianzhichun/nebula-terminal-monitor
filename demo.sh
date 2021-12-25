#! /bin/bash

#set -o xtrace

function usage {
  echo "Usage: ${USAGE_INFO}"
}

[[ -z ${USAGE_INFO} ]] && USAGE_INFO="${0} [-v]  <node|graph|all> <-h|-p>"

if [[ $# == 0 ]]; then
  usage
  exit 1
fi

# Original directory
SCRIPT_PATH=$(readlink -f $0)
# Directory of this script
SCRIPT_DIR=$(dirname ${SCRIPT_PATH})

UTILS_PATH=./utils.sh

[[ -f ${UTILS_PATH} ]] || ERROR_AND_EXIT "${UTILS_PATH} not exist"

source ${UTILS_PATH} || exit 1

function on_exit {
  cd ${OLD_DIR} &>/dev/null
}

trap on_exit EXIT

ACTION=
CONFIG=
DAEMON=
TARGET=
TARGETS=()
VERBOSE=0

# Parsing options from arguments
while getopts ":hvc:" opt; do
  case $opt in
  help)
    usage
    exit 0
    ;;
  v)
    VERBOSE=1
    ;;
  host)
    INFO "hello node"
    ;;
  \?)
    ERROR "Invalid option: -${OPTARG}"
    ;;
  :)
    ERROR_AND_EXIT "Option -${OPTARG} requires an argument."
    ;;
  esac
done

ACTION=${1}
TARGET=${2}

case ${TARGET} in
  --host)
      HOST=($TARGET)
      echo "aa"
      ;;
  --port)
      PORT=(${TARGET})
      ;;
  *)
    ERROR "Unknow daemon ${TARGET}"
    usage
    exit 1
    ;;
esac

function start_node_monitor {
  echo "a"$HOST
  ./node_modules/.bin/stmux -M -w always -e ERROR -m beep -- [ [ -s 1/4 -t '饼图1' "node chart/c" .. -t '折线图' "node chart/a" ] : [ -s 1/4 -t '饼图2' "node chart/d" .. -t '柱状图' "node chart/b" ] ]
  eval ${command}
  INFO "DONE"
}

function start_graph_monitor {
  echo "port"$PORT
  ./node_modules/.bin/stmux -M -w always -e ERROR -m beep -- [ [ -s 1/4 -t '饼图1' "node chart/c" .. -t '折线图' "node chart/a" ] : [ -s 1/4 -t '饼图2' "node chart/d" .. -t '柱状图' "node chart/b" ] ]
  eval ${command}
  INFO "DONE"
}

case ${ACTION} in
node)
  start_node_monitor ${HOST}
  ;;
graph)
  start_graph_monitor ${PORT}
  ;;
*)
  echo "default"
  ;;
esac
