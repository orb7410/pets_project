
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using pets.Data;

namespace pets.Models
{
    [BsonIgnoreExtraElements]
    public class Pet
    {
        [BsonId] 
        public string Id { get; set; } = string.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = "Pet Name";

        [BsonElement("color")]
        public string Color { get; set; } = "Pet Color";

        [BsonElement("created_at")]
        public DateTime Created_at { get; set; }

        [BsonElement("Age")]
        public int Age { get; set; }

        




    }
}