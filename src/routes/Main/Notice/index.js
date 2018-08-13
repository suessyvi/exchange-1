import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './notice.less';

@connect(({ global }) => ({ global }))
class Notice extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('公告中心')(localization)}>
        <Main>
          <div className="wrapper">这是公告中心</div>
        </Main>
      </DocumentTitle>
    );
  }
}

export default Notice;