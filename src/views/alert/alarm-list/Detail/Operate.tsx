import { addAlertwlist, addBlackList, exportAlertPcap } from '@/api/modules/alert/alarm-list';
import { ButtonGroup } from '@/components';
import { TIME_FORMAT } from '@/config/constants';
import { useRequest } from 'ahooks';
import { Dropdown, MenuProps, message } from 'antd';
import dayjs from 'dayjs';

const items: MenuProps['items'] = [
  {
    label: '源IP加白',
    key: 'src'
  },
  {
    label: '目的IP加白',
    key: 'dest'
  },
  {
    label: '全部加白',
    key: 'all'
  }
];

export const Operate = ({ data }) => {
  const { run: add, loading } = useRequest(addAlertwlist, {
    manual: true,
    onSuccess: (res) => {
      message.success(res.reason);
    }
  });

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const key = e.key;
    let param: Record<string, any> = {};
    switch (key) {
      case 'src':
        param = {
          sip: data.src_ip,
          sport: data.src_port
        };
        break;
      case 'dest':
        param = {
          dip: data.dest_ip,
          dport: data.dest_port
        };
        break;
      case 'all':
        param = {
          sip: data.src_ip,
          dip: data.dest_ip,
          sport: data.src_port,
          dport: data.dest_port
        };
        break;
    }
    add({
      name: '',
      ...param,
      proto: ''
    });
  };
  const menuProps = {
    items,
    onClick: handleMenuClick
  };
  const { run: addBlack, loading: addBlackListLoading } = useRequest(addBlackList, {
    manual: true,
    onSuccess: (res) => {
      message.success(res.reason);
    }
  });
  const { run: exportPcap, loading: exportLoading } = useRequest(exportAlertPcap, {
    manual: true
  });

  return (
    <div className="flex gap-2">
      <Dropdown.Button type="primary" menu={menuProps} loading={loading}>
        白名单
      </Dropdown.Button>
      <ButtonGroup
        options={[
          {
            type: 'primary',
            children: '阻断',
            loading: addBlackListLoading,
            onClick: () => {
              addBlack({
                name: '',
                ip: data.src_ip,
                peer: '',
                start_time: dayjs().format(TIME_FORMAT),
                end_time: dayjs().add(10, 'minute').format(TIME_FORMAT)
              });
            }
          },
          {
            type: 'primary',
            children: '导出pcap',
            loading: exportLoading,
            onClick: () => {
              exportPcap({
                id: data.id
              });
            }
          }
        ]}
      />
    </div>
  );
};
