import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import './index.scss';

//初始化当前系统环境，返回终端的 pid，标识当前终端的唯一性
function subscribe({ term, socket, container }) {
  term.open(container);
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  fitAddon.fit();
  const ws = new WebSocket(socket);
  term.loadAddon(new AttachAddon(ws));
  // term.loadAddon(new WebLinksAddon())
  term.focus();
}

const resize = ({ term, container }) => {
  const { clientWidth, clientHeight } = container.parentElement;
  // 计算cols，rows
  const cols =
    (clientWidth - term._core.viewport.scrollBarWidth - 15) /
    term._core._renderService._renderer.dimensions.actualCellWidth;
  const rows = clientHeight / term._core._renderService._renderer.dimensions.actualCellHeight - 1;
  term.resize(parseInt(cols.toString(), 10), parseInt(rows.toString(), 10));
};

export default ({
  options = {
    theme: {
      foreground: '#ECECEC', //字体
      background: '#000000' //背景色
    },
    rows: 50,
    cols: 120,
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontWeight: 400,
    fontSize: 14,
    letterSpacig: 2,
    tabStopWidth: 8, //制表宽度
    cursorBlink: true, // 光标闪烁
    cursorStyle: 'block', // 光标样式  null | 'block' | 'underline' | 'bar'
    scrollback: 800 //回滚
  },
  socket
}) => {
  const terminalContainerRef = useRef(null);

  useEffect(() => {
    let term;
    if (socket) {
      term = new Terminal(options);
      const container = terminalContainerRef.current;
      subscribe({ term, socket, container });
      resize({ term, container });
    }
    return () => {
      //组件卸载，清除 Terminal 实例
      term.dispose();
    };
  }, [socket]);

  return <div className={'terminal-wrapper'} ref={terminalContainerRef} />;
};
