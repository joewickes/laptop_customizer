import React from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

class Form extends React.Component {
  render() {

    const {featureNames, featuresObj, selected, updateFeature} = this.props;

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {featureNames.map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = featuresObj[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (<FeatureItem key={item.name} itemHash={itemHash} feature={feature} item={item} selected={selected} updateFeature={updateFeature}/>);
          });

          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        })}
      </form>
    );
  }
}

export default Form;