var chai = require("chai");
var number = require("../index");
var expect = chai.expect;

describe("number", function () {
  describe("#cardValidator", function () {
    describe("Quando o valor enviado for string", function () {
      it("deve retornar um erro:", function () {
        var verification = function () {
          number.cardValidator("ola");
        };
        expect(verification).to.throw("é necessário o número do cartão para a validação");
      });

      it("deve retornar um erro:", function () {
        var verification = function () {
          number.cardValidator("5453010ola");
        };
        expect(verification).to.throw("é necessário o número do cartão para a validação");
      });

      it("deve retornar um erro:", function () {
        var verification = function () {
          number.cardValidator("36490102462661");
        };
        expect(verification).to.throw("é necessário o número do cartão para a validação");
      });
    });

    describe("Quando não houver parametro", function () {
      it("deve retornar um erro:", function () {
        var verification = function () {
          number.cardValidator("");
        };
        expect(verification).to.throw("é necessário o número do cartão para a validação");
      });
    });

    describe("Quando receber 1 dígito", function () {
      it("deve retornar um erro:", function () {
        var verification = function () {
          number.cardValidator(2);
        };
        expect(verification).to.throw("A quantidade de dígitos está incorreta");
      });
    });

    describe("Quando recebe um número", function () {
      describe("e o numero está válido", function () {
        it("deve retornar true", function () {
          expect(number.cardValidator(5453010000066167)).to.deep.equal(true);
          expect(number.cardValidator(36490102462661)).to.deep.equal(true);
        });
      });

      describe("se o número não é válido", function () {
        it("deve retornar false", function () {
          expect(number.cardValidator(5453010000066168)).to.deep.equal(false);
          expect(number.cardValidator(36490192462661)).to.deep.equal(false);
        });
      });
    });
  });
});
