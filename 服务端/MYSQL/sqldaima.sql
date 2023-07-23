

-- insert into users (username,password ) value('tuozni','222599');
-- select * from users;
-- select username from users;

-- 更新用户数据a
-- update users set password='8799' where id=2;
-- update users set password='777',status=1 where id=3

-- delete from users where id=3;

-- where 子句
-- select * from users where status=0 and id<3
-- 对结果降序显示
-- select * from users order by id desc ;

-- select * from users order by id desc ,username asc
 -- 统计数据条数
 select count(*) as total from users where status=0
