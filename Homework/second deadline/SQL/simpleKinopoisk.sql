CREATE TABLE audiotrack
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "nameLanguage" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT audiotrack_pkey PRIMARY KEY (id)
)

-- 'список языков, которые доступны в качестве аудиодорожки';












CREATE TABLE award
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "nameAward" text COLLATE pg_catalog."default" NOT NULL,
    year text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT award_pkey PRIMARY KEY (id)
)

-- 'список наград за фильм';













CREATE TABLE "film-crew"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    director_id bigint NOT NULL,
    scenario_id bigint NOT NULL,
    producer_id bigint NOT NULL,
    operator_id bigint NOT NULL,
    composer_id bigint NOT NULL,
    artist_id bigint NOT NULL,
    instalation_id bigint NOT NULL,
    CONSTRAINT "film-crew_pkey" PRIMARY KEY (id),
    CONSTRAINT artist_fkey FOREIGN KEY (artist_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT composer_fkey FOREIGN KEY (composer_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT director_fkey FOREIGN KEY (director_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT instalation_fkey FOREIGN KEY (instalation_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT operator_fkey FOREIGN KEY (operator_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT producer_fkey FOREIGN KEY (producer_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT scenario_fkey FOREIGN KEY (scenario_id)
        REFERENCES person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

-- 'список людей, которые работали над фильмом, кроме актеров(главные роли и дубляж)';


















CREATE TABLE "film-info"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "filmName" text COLLATE pg_catalog."default" NOT NULL,
    "filmDescription" text COLLATE pg_catalog."default" NOT NULL,
    "yearOfCreation" integer NOT NULL,
    "countryOfCreation" text COLLATE pg_catalog."default" NOT NULL,
    tagline text COLLATE pg_catalog."default" NOT NULL,
    budget integer NOT NULL,
    marketing integer NOT NULL,
    "usFees" integer NOT NULL,
    "worldFees" integer NOT NULL,
    "russiaPremiere" text COLLATE pg_catalog."default" NOT NULL,
    "worldPremiere" text COLLATE pg_catalog."default" NOT NULL,
    "dvdRelease" text COLLATE pg_catalog."default" NOT NULL,
    "minAge" smallint NOT NULL,
    "time" text COLLATE pg_catalog."default" NOT NULL,
    mpaa character varying(5) COLLATE pg_catalog."default",
    CONSTRAINT "film-name_pkey" PRIMARY KEY (id)
)

-- 'таблица с информацией о фильме ';


















CREATE TABLE "film-person"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "firstName" text COLLATE pg_catalog."default",
    "lastName" text COLLATE pg_catalog."default",
    CONSTRAINT "film-person_pkey" PRIMARY KEY (id)
)

-- 'Таблица для хранения главных ролей и дублирующих';
















CREATE TABLE .genre
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "nameGenre" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT genre_pkey PRIMARY KEY (id)
)

-- 'Список существующих жанров фильмов';













CREATE TABLE person
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    first_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    CONSTRAINT person_pkey PRIMARY KEY (id)
)

-- 'Таблица для хранения имен и фамилий художников, компазиторов, режиссеров, сценаристов,  продюссеров, операторов, монтажеров';


















CREATE TABLE subtitle
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "nameLanguage" text COLLATE pg_catalog."default",
    CONSTRAINT subtitle_pkey PRIMARY KEY (id)
)

-- 'Список языков, на которых доступны суббтитры';
















CREATE TABLE "viewer-by-country"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "nameCountry" text COLLATE pg_catalog."default" NOT NULL,
    "countViewers" bigint NOT NULL,
    CONSTRAINT "viewer-by-country_pkey" PRIMARY KEY (id)
)

-- 'Зрители по странам';
















CREATE TABLE "film-name_audiotrack"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "filmName_id" bigint NOT NULL,
    audiotrack_id bigint NOT NULL,
    CONSTRAINT "film-name_audiotrack_pkey" PRIMARY KEY (id),
    CONSTRAINT audiotrack_fkey FOREIGN KEY (audiotrack_id)
        REFERENCES audiotrack (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT "filmName_fkey" FOREIGN KEY ("filmName_id")
        REFERENCES "film-info" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

-- 'вспомогательная таблица для связи многие ко многим: название фильма и языков озвучки';



















CREATE TABLE "film-name_film-person"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "filmName_id" bigint NOT NULL,
    "filmPerson_id" bigint NOT NULL,
    CONSTRAINT "film-name_film-person_pkey" PRIMARY KEY (id),
    CONSTRAINT "filmName_fkey" FOREIGN KEY ("filmName_id")
        REFERENCES "film-info" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT "filmPerson_fkey" FOREIGN KEY ("filmPerson_id")
        REFERENCES "film-person" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

-- 'Вспомогательная таблица для связи многие ко многим: название фильма и главные роли и дублирующие роли';



















CREATE TABLE "film-name_genre"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "filmName_id" bigint NOT NULL,
    "genreName_id" bigint NOT NULL,
    CONSTRAINT "film-name_genre_pkey" PRIMARY KEY (id),
    CONSTRAINT "filmName_fkey" FOREIGN KEY ("filmName_id")
        REFERENCES "film-info" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT "genreName_fkey" FOREIGN KEY ("genreName_id")
        REFERENCES genre (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

-- 'вспомогательная таблица для связи многие ко многим: название фильма и его жанры ';





















CREATE TABLE "film-name_subtitle"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "filmName_id" bigint NOT NULL,
    subtitle_id bigint NOT NULL,
    CONSTRAINT "film-name_subtitle_pkey" PRIMARY KEY (id),
    CONSTRAINT "filmName_fkey" FOREIGN KEY ("filmName_id")
        REFERENCES "film-info" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT subtitle_fkey FOREIGN KEY (subtitle_id)
        REFERENCES subtitle (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

-- 'вспомогательная таблица для связи многие ко многим: название фильма и языки субтитров';





