import { OwnerMapper } from "./owner-mapper";

describe("OwnerMapper()", () => {
  const ownerMapper = new OwnerMapper();

  it("construct owner for passed attribute values", () => {
    ownerMapper.accountId = 123;
    ownerMapper.userId = 456;
    ownerMapper.reputation = 1;
    ownerMapper.profileImage = "sample-link";

    expect(ownerMapper.build()).toMatchSnapshot();
  });
});
