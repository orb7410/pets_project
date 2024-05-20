using Microsoft.Extensions.Options;
using MongoDB.Driver;
using pets.Data;
using pets.Models;
using System.Collections.Generic;

namespace pets.Services
{
    public class PetServices
    {
        
        private readonly IMongoCollection<Pet> _petCollection;

        public PetServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongoDb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _petCollection = mongoDb.GetCollection<Pet>(settings.Value.CollectionName);
        }

        //get all pest
        public async Task<List<Pet>> GetAsync() => await _petCollection.Find(_ => true).ToListAsync();

        //get sum of all ages
        // sorry, the syntax a little bit new for me and dont have time:)
        public async int GetAsyncAgeSum()
        {
            int sum = 0;
            /*Task<List<Pet>> pets = GetAsync();
            for (int i = 0; i < pets.len(); i++)
            {
                sum += pets[i].Age;
            }*/
            return sum;
        }
        
        //add new pet
        public async Task<Pet> CreateAsync(Pet newPet)
        {
            await _petCollection.InsertOneAsync(newPet);
            return newPet;
        }



        
    }
}

