import { TagMapper } from "./tag-mapper";

describe("TagMapper()", () => {
  const tagMapper = new TagMapper();

  it("construct tag for passed attribute values", () => {
    tagMapper.id = "123";
    tagMapper.name = "sample-tag";

    expect(tagMapper.build()).toMatchSnapshot();
  });
});
