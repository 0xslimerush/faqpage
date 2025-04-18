export interface BulletPoint {
  title?: string;
  bullet_item?: string;
  bullet_item_2?: string;
  bullet_item_3?: string;
  bullet_item_4?: string;
}

export interface ListItem {
  title?: string;
  bullet_item?: string;
  bullet_item_2?: string;
  bullet_item_3?: string;
  bullet_item_4?: string;
}

export interface Answer {
  info: string;
  info_2?: string;
  info_3?: string;
  info_4?: string;
  features?: Feature[];
  bottom_info?: string;
}

export interface FaqItem {
  question: string;
  answer: Answer;
}

export interface FaqData {
  FaqData: FaqItem[];
}

export interface Feature {
  list_item?:
    | string
    | Array<{
        title?: string;
        bullet_item?: string;
        bullet_item_2?: string;
        bullet_item_3?: string;
        bullet_item_4?: string;
      }>;
  list_item_2?:
    | string
    | Array<{
        title?: string;
        bullet_item?: string;
        bullet_item_2?: string;
        bullet_item_3?: string;
      }>;
  list_item_3?:
    | string
    | Array<{
        title?: string;
        bullet_item?: string;
        bullet_item_2?: string;
        bullet_item_3?: string;
        bullet_item_4?: string;
      }>;
  list_item_4?:
    | string
    | Array<{
        title?: string;
        bullet_item?: string;
        bullet_item_2?: string;
        bullet_item_3?: string;
        bullet_item_4?: string;
      }>;
  list_item_5?:
    | string
    | Array<{
        title?: string;
        bullet_item?: string;
        bullet_item_2?: string;
        bullet_item_3?: string;
        bullet_item_4?: string;
      }>;
}
