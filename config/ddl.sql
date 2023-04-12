CREATE SCHEMA IF NOT EXISTS "cryptowallet-schema"
    AUTHORIZATION postgres;

GRANT ALL ON SCHEMA "cryptowallet-schema" TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "cryptowallet-schema"
GRANT ALL ON TABLES TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "cryptowallet-schema"
GRANT ALL ON SEQUENCES TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "cryptowallet-schema"
GRANT EXECUTE ON FUNCTIONS TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "cryptowallet-schema"
GRANT USAGE ON TYPES TO postgres;

CREATE TABLE IF NOT EXISTS "cryptowallet-schema".cryptos
(
    crypto_id character varying(40) COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    asset character varying(10) COLLATE pg_catalog."default",
    icon character varying(50) COLLATE pg_catalog."default",
    value numeric(15,2),
    stock numeric(15,2),
    CONSTRAINT cryptos_pkey PRIMARY KEY (crypto_id),
    CONSTRAINT name UNIQUE (name)
        INCLUDE(name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "cryptowallet-schema".cryptos
    OWNER to postgres;

INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('288adbe4-a056-4115-be53-2860227d4937', 'Bitcoin', 'BTC', '/assets/images/cryptos/btc.png', 25621.51, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('429eb4e1-c20c-4ffd-be07-7a564223fd8b', 'Ethereum', 'ETH', '/assets/images/cryptos/eth.png', 1684.28, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('172a0a10-6178-4923-b630-1c94b0816c03', 'USD Coin', 'USDC', '/assets/images/cryptos/usdc.png', 0.92, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('e183fbdb-81da-4653-ba12-9d65839ae604', 'Dogecoin', 'DOGE', '/assets/images/cryptos/doge.png', 0.07, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('297594ef-9d68-4bea-b895-4c133673e231', 'Cardano', 'ADA', '/assets/images/cryptos/ada.png', 0.35, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('397dc016-1759-4dd0-b6c3-882103036926', 'Litecoin', 'LTC', '/assets/images/cryptos/ltc.png', 82.76, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('b1216a3c-351e-4cf9-a1fe-2394853ce436', 'XRP', 'XRP', '/assets/images/cryptos/xrp.png', 0.46, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('e45f4048-a18e-4700-b0e7-3942142f0cb9', 'BNB', 'BNB', '/assets/images/cryptos/bnb.png', 283.89, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('e53a64b1-8dca-4f59-bd4f-922528fd83dc', 'Solana', 'SOL', '/assets/images/cryptos/sol.png', 18.44, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('d04ff523-3b8e-4c17-8dfe-85b56d942a1d', 'Polygon', 'MATIC', '/assets/images/cryptos/matic.png', 1.00, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('e556dcc0-10c1-45c1-a9d2-8eb80caf8433', 'Polkadot', 'DOT', '/assets/images/cryptos/dot.png', 5.62, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('68a2e8d9-18a9-410f-a65a-0977ea62d89a', 'Uniswap', 'UNI', '/assets/images/cryptos/uni.png', 5.38, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('d9ced656-f941-42da-ae29-35dd066be7ef', 'Chainlink', 'LINK', '/assets/images/cryptos/link.png', 6.51, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('fa25033a-be71-4bf5-9b3f-208a854221bd', 'Stellar Lumens', 'XLM', '/assets/images/cryptos/xlm.png', 0.09, 1000.00);
INSERT INTO "cryptowallet-schema".cryptos (crypto_id, name, asset, icon, value, stock) VALUES ('6821a1a0-9246-4e27-a46b-259584026c6d', 'Avalanche', 'AVAX', '/assets/images/cryptos/avax.png', 15.89, 1000.00);

CREATE TABLE IF NOT EXISTS "cryptowallet-schema".users
(
    user_id character varying(40) COLLATE pg_catalog."default" NOT NULL,
    username character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(50) COLLATE pg_catalog."default",
    email character varying(50) COLLATE pg_catalog."default",
    fullname character varying(250) COLLATE pg_catalog."default",
    birthdate character varying(20) COLLATE pg_catalog."default",
    deposit numeric(15,2),
    CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT email UNIQUE (email)
        INCLUDE(email),
    CONSTRAINT username UNIQUE (username)
        INCLUDE(username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "cryptowallet-schema".users
    OWNER to postgres;

INSERT INTO "cryptowallet-schema".users (user_id, username, password, email, fullname, birthdate, deposit) VALUES ('f5b5b5b5-5b5b-5b5b-5b5b-5b5b5b5b5b5b', 'user1', 'password', 'user1@crypto.com', 'User 1', '01/01/2000', 100000.00);

CREATE TABLE IF NOT EXISTS "cryptowallet-schema".user_crypto
(
    user_id character varying(40) COLLATE pg_catalog."default" NOT NULL,
    crypto_id character varying(40) COLLATE pg_catalog."default" NOT NULL,
    amount numeric(15,2),
    CONSTRAINT user_cypto_pkey PRIMARY KEY (user_id, crypto_id),
    CONSTRAINT crypto_id FOREIGN KEY (crypto_id)
        REFERENCES "cryptowallet-schema".cryptos (crypto_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES "cryptowallet-schema".users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "cryptowallet-schema".user_crypto
    OWNER to postgres;