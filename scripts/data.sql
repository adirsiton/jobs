INSERT INTO jobs.users(upn, display_name) VALUES 
    ('michael-hoffman-26', 'מיכאל הופמן'),
    ('s8258065', 'דניאל דימנשטיין'),
    ('s8222765', 'אדיר סטיון'),
    ('IlliMalachi', 'אילי מלאכי'),
    ('guyshany', 'גיא שני'),
    ('StavBitanski', 'סתיו ביטנסקי'),
    ('ShaharAnti', 'שחר ענתי'),
    ('SteveVaknin', 'סטיב וקנין');

INSERT INTO jobs.roles(name, initials, color) VALUES 
    ('תוכניתן', 'DEV', '#7030A0'),
    ('רש"צ', 'TL', '#00B0F0'),
    ('מנהל מוצר', 'PM', '#FF0066'),
    ('קצין פרויקט', 'PO', '#FFC000'),
    ('ארכיטקט', 'ARCH', '#FFC000');

INSERT INTO jobs.qualifications(name) VALUES 
    ('תוכניתן'),
    ('בודק תוכנה'),
    ('כותב לומדה'),
    ('מיישם'),
    ('אנליסט'),
    ('אחר');

INSERT INTO jobs.standards(name) VALUES 
    ('סרן'),
    ('רס"ן'),
    ('קמ"א'),
    ('רס"ל');

INSERT INTO jobs.users_resume(upn, rank_id, qualification_id, free_text, phone_number) VALUES
('IlliMalachi', 1, 2, 'hey, this is my resume', '053333533'), 
('guyshany', 1, 1, 'hey, this is my resume', '0545421454'),
('SteveVaknin', 1, 1, 'hey, this is my resume', '0545421224');

INSERT INTO jobs.users_desired_roles(upn, desired_role_id) VALUES
('guyshany', 1),
('guyshany', 2),
('IlliMalachi', 1);

INSERT INTO jobs.units(name) VALUES
    ('מצפ"ן'),
    ('ממר"ם'),
    ('שחר');

INSERT INTO jobs.branches(unit_id, name) VALUES
    (1, 'פסגות ושילוביות'),
    (1, 'אבן מתגלגלת'),
    (1, 'סיגמא'),
    (2, 'ענן מבצעי'),
    (2, 'מרחב התומכ"ל'),
    (3, 'שכר');

INSERT INTO jobs.departments(branch_id, name) VALUES
    (1, 'DEVOPS'),
    (1, 'הנדסת השילוביות'),
    (1, 'קישוריות ואש'),
    (1, 'ספקטרום'),
    (1, 'ל"א'),
    (2, 'אבן החכמים'),
    (2, 'גלובוס'),
    (2, 'מעברים'),
    (4, 'Platforms'),
    (4, 'Big Data'),
    (4, 'Cto'),
    (5, 'מימ"ד'),
    (5, 'רשתות'),
    (6, 'תומכי החלוה'),
    (6, 'שכר קבע');



INSERT INTO jobs.base_locations(name) VALUES
    ('של"ר'),
    ('צריפין'),
    ('קריה');
    
INSERT INTO jobs.advertisements(role_id, unit_id, branch_id, department_id, job_title,
                                job_description, entry_date, seniority, is_damach, 
                                advertiser_upn, contact, base_location_id, is_close) VALUES
	(4, 1, 1, 1,'מנהל מוצר מעגל האש', 'מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '09/20', 2, true, 'michael-hoffman-26', 'פלאפון 0527777780', 1, false),
	(1, 1, 2, 6, 'דרוש מפתח תותח','מפתח לצוות התכנון של מערכת שו"ב ל"א, פיתוח אלגוריתמי אפקטיביות חסימה למערך הל"א', '08/20', 3, true, 'michael-hoffman-26', 'פלאפון 0527732470', 1, true),
	(3, 2, 5, 13, 'מנהל מוצר מעגל','מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '04/20', 2, true, 's8258065', 'פלאפון 0527732470', 1, false),
	(2, 2, 4, 10, 'רש"צ חציל', 'ראש צוות מיראז ומציאויות, הצוותים הכי טובים ביחידה BY FAR כדאי לכם להגיע!', '10/20', 2, true, 's8222765', 'פלאפון 0522234560', 2, false),
	(1, 2, 4, 11, 'מנהל מוצר מבצעים', 'מנהל מוצר המבצעים, עוד מוצר שהשיקו במדור עוצמה ועדיין לא מכירה ממש.', '01/21', 2, true, 'michael-hoffman-26', 'פלאפון 0522234560', 2, false),
	(4, 3, 6, 14, 'מנהלת מוצר מעגל','מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '11/20', 2, true, 's8258065', 'פלאפון 0522234560', 3, false),
	(4, 3, 6, 15, 'מנהל מוצר הערכת הישג','מנהל מוצר הערכת הישג, אחראי על תהליך הערכת ההישג הצה"לי ובפרט המטכ"לי.', '05/20', 2, true, 's8222765', 'פלאפון 0528423430', 3, false);

INSERT INTO jobs.standards_of_ads(standard_id, advertisement_id) VALUES
	(1, 1),
	(2, 1),
	(1, 2),
	(3, 3),
	(2, 4),
	(2, 5),
	(3, 5),
	(2, 6),
	(3, 7);

INSERT INTO jobs.favorite_ads_of_users(upn, advertisement_id) VALUES
    ('michael-hoffman-26', 1),
    ('michael-hoffman-26', 2),
    ('michael-hoffman-26', 6),
    ('s8258065', 2),
    ('s8258065', 3),
    ('s8258065', 5),
    ('s8222765', 1),
    ('s8222765', 5),
    ('s8222765', 3),
    ('SteveVaknin', 1),
    ('SteveVaknin', 2),
    ('SteveVaknin', 3);

INSERT INTO jobs.users_previous_jobs(job_name, upn, unit_id, branch_id,
                                     department_id, start_date, end_date) VALUES
('מפתח מיראז forever', 'IlliMalachi', 1, 1, 1, '2019-11-27', '2023-12-23'),
('מפתח מיראז forever', 'guyshany', 1, 1, 1, '2016-10-20', '2021-11-21');

