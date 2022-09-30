interface UserSpecificDao<ID, Model, Model2> {
  findAll: () => Promise<Model[]>;
  create: (model: Model) => Promise<Model>;
  remove: (id: ID) => Promise<void>;
  getOne: (id: ID) => Promise<Model2[]>;
}

export default UserSpecificDao;
