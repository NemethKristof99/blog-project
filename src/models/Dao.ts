interface Dao<ID,Model> {
  findAll: () => Promise<Model[]>,
  create: (model: Model) => Promise<Model>,
  remove: (id: ID) => Promise<void>;
}

export default Dao;