
using Microsoft.AspNetCore.Mvc;
using pets.Models;
using pets.Services;


namespace pets.Controllers
{

    [Route("api/pet")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly PetServices _petServices;

        public PetController(PetServices petServices)
        {
            _petServices = petServices;
        }


        // GET: api/pet
        [HttpGet]
        public async Task<List<Pet>> Get() => await _petServices.GetAsync();

        // GET: api/pet
        [HttpGet]
        public async int GetAgesSum() => await _petServices.GetAsyncAgeSum();


        // POST api/post
        [HttpPost]
        public async Task<ActionResult<Pet>> Post(Pet newPet)
        {
            await _petServices.CreateAsync(newPet);
            return CreatedAtAction(nameof(Get), new { id = newPet.Id }, newPet);
        }

    }
}
