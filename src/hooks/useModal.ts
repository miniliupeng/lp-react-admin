import { App, ModalFuncProps } from 'antd';
import { useState, useRef } from 'react';

type ConfigUpdate = ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps);
type ModalInstance = { destroy: () => void; update: (configUpdate: ConfigUpdate) => void } & {
  then<T>(resolve: (confirmed: boolean) => T, reject: VoidFunction): Promise<T>;
};

export const useModal = (config?: ModalFuncProps) => {
  const { modal } = App.useApp();
  const ModalInstance = useRef<ModalInstance>();
  const showModal = (props?: ModalFuncProps) => {
    ModalInstance.current = modal.confirm({
      className: 'custom-modal',
      title: '标题',
      closable: true,
      onOk: () => {},
      onCancel: () => {},
      ...config,
      ...props
    });
  };
  const closeModal = () => {
    ModalInstance.current?.destroy();
  };
  return {
    showModal,
    closeModal
  };
};

export const useModal2 = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onCancel = () => {
    setOpen(false);
  };

  return {
    open,
    onOpen,
    onCancel
  };
};
