import { createApple, generateApples } from '../apples';

const mockGetRandomPosition = jest.fn();

jest.mock('../positions', () => ({
  getRandomPosition: () => mockGetRandomPosition(),
}));

const generateMockedPositions = (count: number) => {
  const positions = [];
  for (let i = 0; i < count; i = i + 1) {
    positions.push({ x: i, y: i });
  }
  return positions;
};

afterEach(() => {
  mockGetRandomPosition.mockReset();
});

describe('createApple', () => {
  test('should create apple for empty table', () => {
    const positions = generateMockedPositions(1);
    positions.forEach((p) => mockGetRandomPosition.mockReturnValueOnce(p));

    expect(createApple([])).toMatchInlineSnapshot(`
      Object {
        "x": 0,
        "y": 0,
      }
    `);
  });

  test('should create apple for fullfil table', () => {
    const positions = generateMockedPositions(2);
    positions.forEach((p) => mockGetRandomPosition.mockReturnValueOnce(p));

    expect(createApple([{ x: 0, y: 0 }])).toMatchInlineSnapshot(`
      Object {
        "x": 1,
        "y": 1,
      }
    `);
  });
});

describe('generateApples', () => {
  const positions = generateMockedPositions(3);

  beforeEach(() => {
    positions.map((p) => mockGetRandomPosition.mockReturnValueOnce(p));
  });
  test('should generate apples', () => {
    expect(generateApples(3, [])).toEqual(positions);
  });
  test('should generate apples without some positions', () => {
    const additionalPositions = [
      { x: 4, y: 4 },
      { x: 5, y: 5 },
    ];
    additionalPositions.forEach((p) => {
      mockGetRandomPosition.mockReturnValueOnce(p);
      mockGetRandomPosition.mockReturnValueOnce(p);
    });

    expect(generateApples(2, positions)).toEqual(additionalPositions);
  });
});
