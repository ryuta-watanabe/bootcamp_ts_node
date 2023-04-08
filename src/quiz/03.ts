// Q: 文字列の長さを "short", "medium", "long" の３種類に判定する関数の返り値の型を定義してください。
// ヒント: literal types と union types を使うと実現できます。
type StringLength = /* 定義を書く */;
const getStringLength = (s: string): StringLength => {
  if (s.length === 0) {
    // @ts-expect-error getStringLength should not return any invalid values.
    return "type error if other than 'short', 'medium', 'long'";
  } else if (s.length <= 5) {
    return "short";
  } else if (s.length <= 10) {
    return "medium";
  } else {
    return "long";
  }
};

// Q: 配列 `array` と値 `value` を受け取り、配列の中に `value` が含まれるか判定して boolean
//    を返す、 `includes` という関数の型を定義してください。
//    このとき、配列の要素の型は `value` の型と同じであることを型で表現してください。
// ヒント: Generics を使うと実現できます。

// 以下の行を書き換えて型を与えてください。
const includes = (array, value) => {
  // 変更箇所はこの上の行まで
  for (const v of array) {
    if (v === value) {
      return true;
    }
  }
  return false;
};

const includesOk1 = includes([1, 2, 3], 4);
const includesOk2: boolean = includes(["a", "b"], "c");
// @ts-expect-error "message" doesn't match with the type of array (Array<number>).
const includesTypeError1: boolean = includes([1, 2, 3], "message");

// Q: パスワードが条件を満たしているか判定し、条件を満たしているときは "ok", 満たしていないときには
//    "missingNumber", "missingSmallLetter", "missingCapitalLetter" を返す関数
//    `checkPasswordRequirement` の型を定義してください。
//    引数はパスワードが入った文字列に加え、設定のオブジェクトを受け取ることもできます。
//    このとき、設定のオブジェクトの型は `PasswordRequirementOption` で定義されています。
type PasswordRequirementOption = {
  requireNumbers: boolean;
  requireSmallLetters: boolean;
  requireCapitalLetters: boolean;
};
type PasswordRequirementResult =
  | "ok"
  | "missingNumber"
  | "missingSmallLetter"
  | "missingCapitalLetter";

const checkPasswordRequirement = (/* ココを定義してください */): PasswordRequirementResult => {
  if (option?.requireNumbers) {
    if (!/\d/.test(password)) {
      return "missingNumber";
    }
  }
  if (option?.requireSmallLetters) {
    if (!/[a-z]/.test(password)) {
      return "missingSmallLetter";
    }
  }
  if (option?.requireCapitalLetters) {
    if (!/[A-Z]/.test(password)) {
      return "missingCapitalLetter";
    }
  }
  return "ok";
};

const checkPasswordRequirementOk1 = checkPasswordRequirement("password");
const checkPasswordRequirementOk4 = checkPasswordRequirement("password123", {
  requireNumbers: true,
  requireSmallLetters: true,
  requireCapitalLetters: true,
});
const checkPasswordRequirementTypeError1: PasswordRequirementResult =
  // @ts-expect-error the first argument is not a `string`.
  checkPasswordRequirement(1);
const checkPasswordRequirementTypeError2: PasswordRequirementResult =
  // @ts-expect-error the second argument is not a `PasswordRequirementOption`.
  checkPasswordRequirement("password", 1);
const checkPasswordRequirementTypeError3: PasswordRequirementResult =
  // @ts-expect-error the second argument does not have some properties.
  checkPasswordRequirement("password", { requireNumbers: 1 });
const checkPasswordRequirementTypeError4: PasswordRequirementResult =
  // @ts-expect-error the second argument has a unknown property.
  checkPasswordRequirement("password", { unknownOptions: false });
