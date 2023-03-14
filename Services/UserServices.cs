﻿using DataAccess;
using Models;

namespace Services;
public class UserServices{

    private readonly IRepository _iRepo;
    public UserServices(IRepository iRepo){
        _iRepo = iRepo;
    }


    public User CreateAccount(User user){
        try{
            _iRepo.AddUser(user);
            user.Wallet = 1000;
            return (user);

        }
        catch(ArgumentNullException e){
            Console.Write("Error When Creating Account: {0}", e);
            return null;
        }
    }
    public List<User>? GetUsers(){
        return _iRepo.GetAllUsers();
    }
    public bool UserLogin(User user){
        Console.WriteLine("@@");
        return _iRepo.UserLogin(user);
    }

   
    
}
