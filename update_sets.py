import requests
import json

def update_sets_json():
    url = "https://api.tcgdex.net/v2/en/sets"
    filename = "sets.json"

    try:
        print("Fetching data from API...")
        response = requests.get(url)
        # Raise an exception if the request was unsuccessful
        response.raise_for_status()
        
        # Parse the JSON response
        data = response.json()

        # Extract only 'id' and 'name' from each set
        # This list comprehension creates the specific format you requested
        filtered_sets = [
            {"id": item["id"], "name": item["name"]} 
            for item in data
        ]

        # Writing to 'w' mode automatically clears the file before writing
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(filtered_sets, f, indent=2)

        print(f"Successfully updated {filename} with {len(filtered_sets)} sets.")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    update_sets_json()
