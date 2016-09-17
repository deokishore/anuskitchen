package com.tamaar.service;

import com.tamaar.dao.UserDao;

import java.sql.SQLException;


public class UserServiceImpl
{

		private UserDao userDao;

		public UserDao getUserDao()
		{
				return this.userDao;
		}

		public void setUserDao(UserDao userDao)
		{
				this.userDao = userDao;
		}


		public boolean isValidUser(String username, String password) throws SQLException
		{
				return userDao.isValidUser(username, password);
		}

}
