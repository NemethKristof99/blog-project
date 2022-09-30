interface Dao<ID, Model> {
  findAll: () => Promise<Model[]>;
  create: (model: Model) => Promise<Model>;
  remove: (id: ID) => Promise<void>;
  getOne: (id: ID) => Promise<Model[]>;
}

export default Dao;
