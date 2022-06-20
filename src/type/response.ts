export const Success = (data: any) => {
  return {
    success: true,
    data: data,
  };
};

export const SuccessUpdate = (numberOfRecords: number) => {
  return {
    success: true,
    updatedRows: numberOfRecords
  };
};

export const FailCouldNotFind = () => {
  return {
    success: false,
    data: 0,
    message: "Could not find. Data doesn't exist",
  };
};

export const FailDelete =() => {
    return {
        success: false,
        deletedRows: 0 
    };
}

export const FailSQL = (err: any) => {
  return {
    success: false,
    code: err.code,
    sql: err.sql,
    sqlMessage: err.sqlMessage,
  };
};
