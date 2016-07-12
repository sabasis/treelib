class Species
    def initialize(s)
        @id = s[:id] 
        @name = s[:name]
        @descrip = s[:descrip]
        @genus_id = s[:g_id]
        @album_id = s[:album_id] || nil 
    end

    attr_accessor :id, :name, :genus, :descrip, :genus_id, :album_id

    def to_hash
        h = {}
        instance_variables = self.instance_variables
        instance_variables.collect {|name| h[name.to_s.gsub('@','')] = instance_variable_get(name)}
        return h
    end

    def to_json
        hash = self.to_hash
        hash.to_json
    end
    
    def refresh
    end 
end