import React, {Component} from 'react';
import classes from './Donations.scss';
import {connect} from 'react-redux';

class Donations extends Component {

  render() {

    return (
        <div className={classes.Donations}>

          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8">
                <div className="h3 text-center">
                  {this.props.content.donationType1.donationTitle}
                </div>
                <div>
                  {this.props.content.donationType1.donationParagraph1.donationParagraphTitle}
                </div>
                <div>
                  {this.props.content.donationType1.donationParagraph1.donationParagraphText}
                </div>
                <div>
                  {this.props.content.donationType1.donationParagraph2.donationParagraphTitle}
                </div>
                <div>
                  {this.props.content.donationType1.donationParagraph2.donationParagraphText}
                </div>
              </div>
            </div>
            <hr/>
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8">
                <h3 className="text-center">{this.props.content.donationType2.donationTitle}:</h3>
                <div className="text-center">
                  <form action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_blank"><input name="cmd" type="hidden"
                                               value="_s-xclick"/>
                    <input name="hosted_button_id" type="hidden"
                           value="GMQFJ8RLUTM5S"/>
                    <input alt="PayPal - The safer, easier way to pay online!"
                           name="submit"
                           src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                           type="image"/>
                    <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                    alt="" width="1" height="1" border="0"/>
                  </form>
                </div>
              </div>
            </div>
          </div>


        </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    language: state.language.languageSelected,
    content: state.appData.data[state.language.languageSelected].languageData.pages.donations,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Donations);