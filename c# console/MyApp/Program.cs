using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Supabase;
using Postgrest.Attributes;
using Postgrest.Models;

#region MODEL

[Table("movies")]
public class MovieBooking : BaseModel
{
    private int id;
    private string name;
    private DateTime date;
    private decimal price;
    private string movie;

    [PrimaryKey("id", false)]
    public int Id
    {
        get { return id; }
        set { id = value; }
    }

    [Column("name")]
    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    [Column("date")]
    public DateTime Date
    {
        get { return date; }
        set { date = value; }
    }

    [Column("price")]
    public decimal Price
    {
        get { return price; }
        set { price = value; }
    }

    [Column("movie")]
    public string Movie
    {
        get { return movie; }
        set { movie = value; }
    }

    public MovieBooking() { }

    public MovieBooking(string name, string movie, DateTime date, decimal price)
    {
        this.name = name;
        this.movie = movie;
        this.date = date;
        this.price = price;
    }
}

#endregion

#region INTERFACE

public interface IIncomeCalculator
{
    decimal GetTotalIncome();
    void IncomePerDay();
    void IncomePerMovie();
    decimal EstimatedVat();
}

#endregion

#region SERVICE

public class IncomeService : IIncomeCalculator
{
    private List<MovieBooking> bookings;

    public IncomeService(List<MovieBooking> bookings)
    {
        this.bookings = bookings;
    }

    public decimal GetTotalIncome()
    {
        return bookings.Sum(x => x.Price);
    }

    public void IncomePerDay()
    {
        var result = bookings
            .GroupBy(x => x.Date.Date)
            .Select(g => new
            {
                Date = g.Key,
                Income = g.Sum(x => x.Price)
            })
            .OrderBy(x => x.Date);

        foreach (var r in result)
        {
            Console.WriteLine($"{r.Date:yyyy-MM-dd} -> {r.Income} Ft");
        }
    }

    public void IncomePerMovie()
    {
        var result = bookings
            .GroupBy(x => x.Movie)
            .Select(g => new
            {
                Movie = g.Key,
                Income = g.Sum(x => x.Price)
            })
            .OrderByDescending(x => x.Income);

        foreach (var r in result)
        {
            Console.WriteLine($"{r.Movie} -> {r.Income} Ft");
        }
    }

    public decimal EstimatedVat()
    {
        return GetTotalIncome() * 0.27m;
    }
}

#endregion

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

        var response = await client
            .From<MovieBooking>()
            .Get();

        var bookings = response.Models;

        var incomeService = new IncomeService(bookings);

        bool running = true;

        while (running)
        {
            Console.WriteLine("\n=== MOVIE BOOKING SYSTEM ===");
            Console.WriteLine("1 - Total Income");
            Console.WriteLine("2 - Income Per Day");
            Console.WriteLine("3 - Income Per Movie");
            Console.WriteLine("4 - Estimated VAT (27%)");
            Console.WriteLine("0 - Exit");

            Console.Write("Choose: ");
            string input = Console.ReadLine();

            Console.WriteLine();

            switch (input)
            {
                case "1":
                    Console.WriteLine($"Total Income: {incomeService.GetTotalIncome()} Ft");
                    break;

                case "2":
                    incomeService.IncomePerDay();
                    break;

                case "3":
                    incomeService.IncomePerMovie();
                    break;

                case "4":
                    Console.WriteLine($"Estimated VAT: {incomeService.EstimatedVat()} Ft");
                    break;

                case "0":
                    running = false;
                    break;

                default:
                    Console.WriteLine("Invalid option");
                    break;
            }
        }
    }
}