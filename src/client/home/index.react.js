import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

export default class HomeIndex extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="home-page">

          <table>

            <tr>
              <td>Středa 9. 9. 2015</td>
              <td><strong>Praha</strong></td>
              <td>MLMU</td>
              <td>
                <span className="event-name">Using Apache Spark (Peter Zvirinský)</span>
                <span className="event-name-tags-separator">&middot;</span>
                <span className="event-tag">Apache Spark</span>
                <span className="event-tag">Hadoop</span>
              </td>
            </tr>

            <tr>
              <td>Středa 24. 9. 2015</td>
              <td><strong>Brno</strong></td>
              <td>Brněnské Pyvo</td>
              <td>
                <span className="event-name">3.5 Release Party</span>
                <span className="event-name-tags-separator">&middot;</span>
                <span className="event-tag">Python</span>
              </td>
            </tr>

          </table>

        </div>
      </DocumentTitle>
    );
  }

}
