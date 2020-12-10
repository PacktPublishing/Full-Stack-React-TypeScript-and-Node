export const log = async (
  resolver: any,
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (!parent) {
    console.log("Start logging");
  }

  const result = await resolver(parent, args, context, info);

  console.log("Finished call to resolver");

  return result;
};
