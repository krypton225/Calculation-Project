CREATE TABLE user_admin (
    username       VARCHAR2(50) NOT NULL,
    first_name     VARCHAR2(25),
    last_name      VARCHAR2(25) NOT NULL,
    phone_number   VARCHAR2(11) NOT NULL,
    password       VARCHAR2(100) NOT NULL,
    CONSTRAINT user_admin_pk PRIMARY KEY ( username ) ENABLE
);

-- =============================================================================================

CREATE TABLE customer (
    id_customer        NUMBER NOT NULL,
    first_name         VARCHAR2(80) NOT NULL,
    lastt_name         VARCHAR2(80) NOT NULL,
    gender             NUMBER DEFAULT 1,
    first_mobile       VARCHAR2(11) NOT NULL,
    second_mobile      VARCHAR2(11),
    third_mobile       VARCHAR2(11),
    first_telephone    VARCHAR2(7),
    second_telephone   VARCHAR2(7),
    CONSTRAINT customer_pk PRIMARY KEY ( id_customer ) ENABLE
);

COMMENT ON COLUMN customer.gender IS
    '1 for male, and 0 for female.';
    
-- =============================================================================================