import { BulletPoint, Feature, ListItem } from "../types/types";

const renderBulletPoints = (item: BulletPoint) => {
  if (!item) return null;
  return (
    <ul>
      {item.bullet_item && <li>{item.bullet_item}</li>}
      {item.bullet_item_2 && <li>{item.bullet_item_2}</li>}
      {item.bullet_item_3 && <li>{item.bullet_item_3}</li>}
      {item.bullet_item_4 && <li>{item.bullet_item_4}</li>}
    </ul>
  );
};

const renderListItem = (item: string | ListItem[] | undefined) => {
  if (!item) return null;

  if (typeof item === "string") {
    return <li>{item}</li>;
  }

  if (Array.isArray(item)) {
    return (
      <li>
        {item[0].title}
        {renderBulletPoints(item[0])}
      </li>
    );
  }
};

export const renderFeaturesList = (features: Feature[]) => {
  return features.map((feature, featureIndex) => (
    <ol key={featureIndex}>
      {renderListItem(feature.list_item)}
      {renderListItem(feature.list_item_2)}
      {renderListItem(feature.list_item_3)}
      {renderListItem(feature.list_item_4)}
      {renderListItem(feature.list_item_5)}
    </ol>
  ));
};
