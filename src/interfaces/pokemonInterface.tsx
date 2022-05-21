export interface Pokemon {
  id: number;
  name: string;
  imageURL: string;
  attack: number;
  life: number;
  evolution: string | null;
  types: Array<Type>;
  category: Category;
}

export interface Type {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}
