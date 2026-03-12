using System;
using System.Threading.Tasks;
using Supabase;
using Postgrest.Attributes;
using Postgrest.Models;

// Model for the table
[Table("movies")]
public class User : BaseModel
{
    [PrimaryKey("id", false)]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("date")]
    public string Date { get; set; }

    [Column("price")]
    public string Price { get; set; }
}

class Program
{
    static async Task Main(string[] args)
    {
        var url = "https://saspohupcxrgkaxuxyom.supabase.co";
        var key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhc3BvaHVwY3hyZ2theHV4eW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5MDgzNDgsImV4cCI6MjA4ODQ4NDM0OH0.S09f5ScJkwpPDV-7ONl2UtRhOPAo3cM4FxO09x-fePU";
        var options = new SupabaseOptions
        {
            AutoConnectRealtime = false
        };

        var client = new Client(url, key, options);

        await client.InitializeAsync();

        Console.WriteLine("Connected to Supabase");

        // Fetch all rows
        var response = await client
            .From<User>()
            .Get();

        var users = response.Models;

        Console.WriteLine("Users:");

        Console.WriteLine(users[0].Id);
        /*foreach (var user in users)
        {
            Console.WriteLine($"{user.Id} | {user.Name} | {user.Date} | {user.Price}");
        }*/
    }
}